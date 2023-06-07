import { useState } from "react"


const StatisticLine = (props) => {
  console.log('statisticline', props)
  return (
    <div>
      <colgroup>
        <col style={{width: '70px'}}/>
        <col />
      </colgroup>
        <td>{props.text}</td>      
        <td>{props.value}</td>    
    </div>
  )
}

const Statistics = (props) => {
  console.log('statistics', props)
  const all = props.good + props.neutral + props.bad
  if (props.denominator === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  
  return (
    <table>      
      <tbody>
        <tr>
          <StatisticLine text='good' value={props.good}/>
        </tr>
        <tr>
          <StatisticLine text='neutral'  value={props.neutral}/>
        </tr>    
        <tr>
          <StatisticLine text='bad'  value={props.bad}/>
        </tr>
        <tr>
          <StatisticLine text='all' value={all}/>
        </tr>
        <tr>
          <StatisticLine text='average'  value={props.numerator/props.denominator}/>
        </tr>
        <tr>
          <StatisticLine text='positive'  value={props.good/(all)*100 +'%'}/>
        </tr>  
      </tbody>
    </table>
  )
}
const Button = ({handleClick, text}) => {
  console.log('button', handleClick)
 
  return (
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [click, setClick] = useState(
    {good: 0, neutral: 0, bad: 0, numerator: 0, denominator: 0}
  )
  const goodClick = () => { 
    const newClick = {
      ...click,
      good: click.good + 1, numerator: click.numerator + 1, denominator: click.denominator + 1
    }
    
    setClick(newClick)
    
  }

  const neutralClick = () => {
   
      const newClick = {
        ...click,
        neutral: click.neutral + 1, denominator: click.denominator + 1
      }
    
    setClick(newClick)
    
  }
  
  const badClick = () => {
    const newClick = {
      ...click,
      bad: click.bad + 1, numerator: click.numerator - 1, denominator: click.denominator + 1
    }
    
    setClick(newClick)
    
  }

  return (
    
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={goodClick} text='good'/>   
      <Button handleClick={neutralClick} text='neutral'/>
      <Button handleClick={badClick} text='bad' />
      
      <h1>Statistics</h1>
    
      <Statistics good = {click.good} neutral = {click.neutral} bad = {click.bad} numerator = {click.numerator} denominator = {click.denominator}/>      
    </div>  
  );
}

export default App