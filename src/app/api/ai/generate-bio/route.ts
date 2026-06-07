import { NextRequest, NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';
import { requireAuth } from '@/lib/auth';
import { aiBioSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth();
    const body = await request.json();

    const validated = aiBioSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { data: null, error: validated.error.errors[0].message, success: false },
        { status: 400 }
      );
    }

    const { skills, experience, specialization, tone } = validated.data;

    const toneGuide = {
      professional: 'formal, polished, and authoritative',
      casual: 'friendly, approachable, and conversational',
      creative: 'bold, unique, and memorable',
    };

    const prompt = `You are a professional bio writer for developers. Write a compelling developer bio with the following details:

Skills: ${skills.join(', ')}
Years of Experience: ${experience}
Specialization: ${specialization}
Tone: ${toneGuide[tone]}

Requirements:
- Write in first person
- Keep it between 100-150 words
- Highlight the most impressive skills
- Sound human and authentic, not robotic
- End with what the developer is currently working on or looking for
- Do not use generic phrases like "passionate developer" or "love to code"
- Make it stand out from typical developer bios

Write only the bio text, no labels or headers.`;

    const { data, error } = await insforge.ai.completion({
      model: 'gpt-4o-mini',
      prompt,
    });

    if (error || !data) {
      return NextResponse.json(
        { data: null, error: 'Failed to generate bio', success: false },
        { status: 500 }
      );
    }

    const generatedBio = data.choices?.[0]?.message?.content || data;

    // Save the AI bio to the profile
    await insforge.database
      .from('profiles')
      .update({ ai_bio: generatedBio })
      .eq('id', user.id);

    return NextResponse.json({
      data: { bio: generatedBio },
      error: null,
      success: true,
    });
  } catch {
    return NextResponse.json(
      { data: null, error: 'Unauthorized', success: false },
      { status: 401 }
    );
  }
}
