'use client';

import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0D0D14] px-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-white mb-4">Oops!</h1>
            <p className="text-gray-400 mb-8">
              Something went wrong. Don't worry, we're here to help.
            </p>
            <p className="text-sm text-gray-500 mb-8 font-mono break-all">
              {this.state.error?.message}
            </p>
            <button
              onClick={this.handleRetry}
              className="px-6 py-3 bg-[#7C3AED] text-white rounded-lg hover:bg-[#A855F7] transition-colors font-semibold"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
