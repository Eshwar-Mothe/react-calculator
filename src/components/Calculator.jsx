import { Component } from "react";
import { evaluate } from 'mathjs'

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            number: '',
            evaluate: 0,
        }
    }

    handleButtonClick = (event) => {
        this.setState({ number: this.state.number + event.target.value })
    }

    handleAddition = () => {
        this.setState({ number: this.state.number + '+' })
    }

    handleSubtraction = () => {
        this.setState({ number: this.state.number + '-' })
    }

    handleMultiplication = () => {
        this.setState({ number: this.state.number + '*' })
    }

    handleDivision = () => {
        this.setState({ number: this.state.number + '/' })
    }

    handleEvaluation = () => {
        try {
            this.setState({ evaluate: evaluate(this.state.number), number: '' })
        }
        catch (error) {
            alert("Invalid Operation", error)
            this.setState({ evaluate: 0, number: '' })
        }
    }


    handleDelete = () => {
        console.log('triggering')
        this.setState({ number: this.state.number.slice(0, -1) })
    }
    handleClear = () => {
        this.setState({ evaluate: 0, number: '' })
    }
    render() {
        return (
            <>
                    <input type="text" value={this.state.number} readOnly />

                    <div className="display">Ans: {this.state.evaluate}</div>

                    <div className="buttonContainer">

                        <div className="row row1">
                            <button onClick={this.handleButtonClick} value={7}>7</button>
                            <button onClick={this.handleButtonClick} value={8}>8</button>
                            <button onClick={this.handleButtonClick} value={9}>9</button>
                        </div>

                        <div className="row row2">
                            <button onClick={this.handleButtonClick} value={4}>4</button>
                            <button onClick={this.handleButtonClick} value={5}>5</button>
                            <button onClick={this.handleButtonClick} value={6}>6</button>
                        </div>

                        <div className="row row3">
                            <button onClick={this.handleButtonClick} value={1}>1</button>
                            <button onClick={this.handleButtonClick} value={2}>2</button>
                            <button onClick={this.handleButtonClick} value={3}>3</button>
                        </div>

                        <div className="row row4">
                            <button onClick={this.handleButtonClick} value={0}>0</button>
                        </div>

                        <div className="row row5">
                            <button onClick={this.handleAddition}>+</button>
                            <button onClick={this.handleSubtraction}>-</button>
                            <button onClick={this.handleMultiplication}>x</button>
                            <button onClick={this.handleDivision}>/</button>
                        </div>

                        <div className="row row6">
                            <button onClick={this.handleButtonClick} value={'.'}>.</button>
                            <button onClick={this.handleEvaluation}>=</button>
                            <button onClick={this.handleDelete}>Del</button>
                            <button onClick={this.handleClear}>Clear</button>
                        </div>
                    </div>
            </>
        )
    }
}

export default Calculator