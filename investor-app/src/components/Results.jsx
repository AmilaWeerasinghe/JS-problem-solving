import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({userInput}) =>{
    const Results = calculateInvestmentResults(userInput);
    const InitialInvestment = Results[0].valueEndOfYear - Results[0].interest - Results[0].annualInvestment;
    
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {Results.map((result) =>{
                    const TotalInterest = result.valueEndOfYear - result.annualInvestment * result.year- InitialInvestment;
                    const TotalAmountInvested = result.valueEndOfYear - TotalInterest;
                return<tr key={result.year}>
                    <td>{result.year}</td>
                    <td>{formatter.format(result.valueEndOfYear)}</td>
                    <td>{formatter.format(result.interest)}</td>
                    <td>{formatter.format(TotalInterest)}</td>
                    <td>{formatter.format(TotalAmountInvested)}</td>
                </tr>
            })}
            </tbody>
            

        </table>
    )
}

export default Results;