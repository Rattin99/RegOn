


const Pay = ({payHandler,onTransIdchange,onPayMethodChange}) => {


    return (
        <>
            <div className="contacts">
                <div className="number1">
                    <span className="bkash">bkash</span>
                    <span className="number"> 01743-514438</span>
                </div>
               
                <div className="number2">
                    <span className="rocket">rocket</span>
                    <span className="number">017880-614723</span>
                </div>
               
            </div>

            <div className="inst">
                <span> send 600tk to any of the numbers above</span>
                <span> then submit the transaction id below</span>
            </div>

            
            <fieldset onChange={onPayMethodChange} className="payment-methods">
                <legend className="p-legend">
                    which one did you use?
                </legend>
                <div>
                    <input type='radio' id = 'bk' name="method" value="bkash" />
                    <label htmlFor="bk">
                        bkash 
                    </label>
                </div>
                <div>
                    <input type='radio' id = 'rk' name="method" value="rocket" />
                    <label htmlFor="rk">
                        rocket
                    </label>
                </div>
            </fieldset>
           

            <div className="trans"> 
                <input onChange={onTransIdchange} className="tri" name="trans" placeholder="transaction id" type="text" /> 
            </div>

            <div className="but">
                <button onClick={payHandler}>submit</button>
            </div>
        </>
    )
}

export default Pay;