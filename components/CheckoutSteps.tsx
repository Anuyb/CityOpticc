const CheckoutSteps = ({ current = 0 }) => {
    return (
      <ul className="steps steps-vertical lg:steps-horizontal w-full m-4">
        {['Хэрэглэгч нэвтрэх', 'Хүргэлтийн хаяг', 'Төлбөрийн хэрэгсэл', 'Захиалга өгөх'].map(
          (step, index) => (
            <li
              key={step}
              className={`step
             ${index <= current ? 'step-primary' : ''}
             `}
            >
              {step}
            </li>
          )
        )}
      </ul>
    )
  }
  export default CheckoutSteps