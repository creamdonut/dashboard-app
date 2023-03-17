import { Component, ReactNode } from 'react';

import { Error } from './ui/Error';

type Props = {
  children: ReactNode;
};

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error) {
    console.log('send report to error capturing tool with error ' + error);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <Error />;
    }

    return children;
  }
}
