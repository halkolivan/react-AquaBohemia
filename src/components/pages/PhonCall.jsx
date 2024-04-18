const PhoneCallComponent = () => {
  const handlePhoneCall = () => {
    const phoneNumber = "079437878";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      <span className="number-call" onClick={handlePhoneCall}>
        373 691279871
      </span>
    </div>
  );
};

export default PhoneCallComponent;
