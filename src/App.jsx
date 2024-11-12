import { useState } from 'react'
import { Input } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {

  let [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  let [convertedAmount, setconvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  console.log(currencyInfo);
  
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setconvertedAmount(amount)
  }
  const convert = () => {
    setconvertedAmount( amount * currencyInfo[to]);
  }
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/27798135/pexels-photo-27798135/free-photo-of-a-tall-building-with-many-windows-and-curved-sides.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();

              }}
            >
              <div className="w-full mb-1">
                <Input
                type="text"
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange= {(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={
                    (amount) => { 
                      setAmount(amount)
                    }
                  }
                  

                  

                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick={() => swap()}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <Input
                  label="To"
                  
                  amount={convertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setTo(currency)} 
                  
                  selectCurrency={to}
                  
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
