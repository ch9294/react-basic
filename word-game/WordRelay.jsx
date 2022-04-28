const React = require('react');

class WordRelay extends React.Component {
    state = {
        word: "제로초", value: "", result: ""
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === e.target[0].value[0]) {
            this.setState(prev => {
                this.input.focus();
                return {
                    word: e.target[0].value,
                    value: '',
                    result: "정답입니다."
                }
            });
        } else {
            this.setState(prev => {
                this.input.focus();
                return {
                    ...prev, result: "정답이 아닙니다.", value: ""
                }
            });
        }
    }

    onChange = (e) => {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        });
    }

    input;
    onRefInput = (c) => {
        this.input = c;
    }

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} type="text" value={this.state.value} onChange={this.onChange}/>
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }

}


module.exports = WordRelay;