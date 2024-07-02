import { Component, ReactNode } from "react";

type HeaderState = {
  value: string;
};

type HeaderProps = {
  submit: (value: string) => void;
};

export default class Header extends Component<HeaderProps, HeaderState> {
  state = {
    value: "",
  };
  render(): ReactNode {
    return (
      <header className="header">
        <input
          type="text"
          value={this.state.value}
          onInput={(e) =>
            this.setState({ value: (e.target as HTMLInputElement).value })
          }
        />
        <button onClick={() => this.props.submit(this.state.value)}>
          Search
        </button>
      </header>
    );
  }
}
