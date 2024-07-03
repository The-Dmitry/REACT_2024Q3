import { Component, ReactNode } from "react";
import Fallback from "../fallback/Fallback";

type Props = {
  children: ReactNode | ReactNode[];
};

type State = {
  error: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  render(): ReactNode {
    return (
      <>
        {this.state.error && (
          <Fallback reload={() => this.setState({ error: false })} />
        )}
        {!this.state.error && this.props.children}
      </>
    );
  }
}
