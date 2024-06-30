const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-26 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
  
    heroHeadText:
      "font-black text-white lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[20px] xs:text-[15px] text-[16px] lg:leading-[40px]",
  
    sectionHeadText:
      "text-white font-black my-10 md:text-[40px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  };

  const circleContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '70px', // Adjust this value as needed
    left: '50%',
    transform: 'translateX(-50%)',
    width: '200px', // Adjust this value as needed
    height: '200px', // Adjust this value as needed
    borderRadius: '50%',
    border: '5px solid #108CC6', // Blue color
    overflow: 'hidden', // Ensures the image stays within the circle
  };
  
  
  export { styles };