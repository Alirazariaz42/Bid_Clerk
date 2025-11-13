// import logo from './logo.svg';
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Header } from "./Components/CommonComponents/Header/Header";
import { Footer } from "./Components/CommonComponents/Footer/Footer";
import { Payments } from "./Components/Payments/Payments";
import { EstimatingFee } from "./Components/EstimatingFee/EstimatingFee";
import { ContactUs } from "./ContactUs/ContactUs";
import { Services } from "./Components/Services/Services";
import { CostEstimation } from "./CostEstimation/CostEstimation";
import { ConstructionTakeOff } from "./Components/ConstructionTakeOff/ConstructionTakeOff";
import { CPMScheduling } from "./Components/CPMScheduling/CPMScheduling";
import { Planning } from "./Components/Planning/Planning";
import { QuantitiesTakeOff } from "./Components/QuantitiesTakeOff/QuantitiesTakeOff";
import { MaterialTakeOff } from "./Components/MaterialTakeOff/MaterialTakeOff";
import { GeneralRequirements } from "./Components/TradesPages/GeneralRequirements/GeneralRequirements";
import { ThermalAndMostiure } from "./Components/TradesPages/ThermalAndMostiure/ThermalAndMostiure";
import { SiteWork } from "./Components/TradesPages/SiteWork/SiteWork";
import { CommericalEstimating } from "./Components/TradesPages/CommericalEstimating/CommericalEstimating";
import { Concrete } from "./Components/TradesPages/Concrete/Concrete";
import { FramingEstimating } from "./Components/TradesPages/FramingEstimating/FramingEstimating";
import { FurnishingEstimating } from "./Components/TradesPages/FurnishingEstimating/FurnishingEstimating";
import { IndustrialEstimating } from "./Components/TradesPages/IndustrialEstimating/IndustrialEstimating";
import { LumberTakeOff } from "./Components/TradesPages/LumberTakeOff/LumberTakeOff";
import { Masonry } from "./Components/TradesPages/Masonry/Masonry";
import { MEP_Estimating } from "./Components/TradesPages/MEP_Estimating/MEP_Estimating";
import { Metals } from "./Components/TradesPages/Metals/Metals";
import { ResidentialEstimating } from "./Components/TradesPages/ResidentialEstimating/ResidentialEstimating";
import { Trade } from "./Components/TradesPages/Trade/Trade";
import { UploadModal } from "./Components/CommonComponents/UploadModal/UploadModal";
import { useEffect, useState } from "react";
import { MyContext } from "./Components/Store/MyContext";
import { NYCServices } from "./Components/NycServicews/NYCServices";
import { ScrollToTop } from "./Components/CommonComponents/ScrollToTop";
import { HVAC } from "./Components/TradesPages/HVAC/HVAC";
import { MechanicalEstimating } from "./Components/TradesPages/MechanicalEstimating/MechanicalEstimating";
import { ElectricalEstimation } from "./Components/TradesPages/ElectricalEstimation/ElectricalEstimation";
import { Plumbing } from "./Components/TradesPages/Plumbing/Plumbing";
import { ConveyingSystem } from "./Components/TradesPages/ConveyingSystem/ConveyingSystem";
import { SpecialConstruction } from "./Components/TradesPages/SpecialConstruction/SpecialConstruction";
import { Equipment } from "./Components/TradesPages/Equipment/Equipment";
import { InterionExterior } from "./Components/TradesPages/InterionExterior/InterionExterior";
import { HoverDropDown } from "./Components/HoverDropDown/HoverDropDown";
import { LandScaping } from "./Components/TradesPages/LandScaping/LandScaping";
import { RebarEstimating } from "./Components/TradesPages/RebarEstimating/RebarEstimating";
import { Insulating } from "./Components/TradesPages/Insulating/Insulating";
import { Roofing } from "./Components/TradesPages/Roofing/Roofing";
import { WoodandPlastic } from "./Components/TradesPages/WoodandPlastic/WoodandPlastic";
import { Flooring } from "./Components/TradesPages/Flooring/Flooring";
import { DryWall } from "./Components/TradesPages/DryWall/DryWall";
import { Gutter } from "./Components/TradesPages/Gutter/Gutter";
import { PopUps } from "./Components/CommonComponents/PopUps";
import { PageNotFound } from "./Components/CommonComponents/PageNotFound";
import { BackgroundBeamsDemo } from "./Components/CommonComponents/BackgroundBeamsDemo";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      console.log("Function called");
      setPopUpOpen(true);
      setCount((prevCount) => prevCount + 1);
    }, 5000);

    return () => clearTimeout(interval);
  }, []);
  const [isModalOpen, setModalOpen] = useState(false);

  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const changeEvent = () => {
    setModalOpen(!isModalOpen);
  };

  const closePopUp = () => {
    setPopUpOpen(!isPopUpOpen);
  };

  return (
    <MyContext.Provider
      value={{
        initialValue: isModalOpen,
        changefunction: changeEvent,
        closePopup: closePopUp,
      }}
    >
      {/* <Qadees /> */}
      <div className="">
        {isModalOpen ? <UploadModal /> : ""}
        {isPopUpOpen ? <PopUps /> : ""}
        <Header />
        <BackgroundBeamsDemo/>

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us/" element={<AboutUs />} />
          <Route path="/payment/" element={<Payments />} />
          <Route path="/estimating-fee/" element={<EstimatingFee />} />{" "}
          <Route path="/contact-us/" element={<ContactUs />} />
          <Route path="/services/" element={<Services />} />
          <Route
            path="/cost-estimating-services/"
            element={<CostEstimation />}
          />
          <Route
            path="/construction-takeoff-services/"
            element={<ConstructionTakeOff />}
          />
          <Route path="/cpm-scheduling/" element={<CPMScheduling />} />
          <Route path="/planning/" element={<Planning />} />
          <Route
            path="/quantity-takeoff-services/"
            element={<QuantitiesTakeOff />}
          />
          <Route
            path="/material-takeoff-services/"
            element={<MaterialTakeOff />}
          />
          <Route
            path="/general-requirements/"
            element={<GeneralRequirements />}
          />
          <Route
            path="/thermal-moisture-protection-estimating-services/"
            element={<ThermalAndMostiure />}
          />
          <Route
            path="/commercial-estimating-services/"
            element={<CommericalEstimating />}
          />
          <Route path="/concrete-estimating-services/" element={<Concrete />} />
          <Route
            path="framing-estimating-services/"
            element={<FramingEstimating />}
          />
          <Route
            path="/furnishing-estimating-services/"
            element={<FurnishingEstimating />}
          />
          <Route
            path="/industrial-estimating-services/"
            element={<IndustrialEstimating />}
          />
          <Route path="/lumber-takeoff-services/" element={<LumberTakeOff />} />
          <Route path="/masonry-estimating-services/" element={<Masonry />} />
          <Route
            path="/mep-estimating-services/"
            element={<MEP_Estimating />}
          />
          <Route path="/metals-estimating-services/" element={<Metals />} />
          <Route
            path="/residential-estimating-services/"
            element={<ResidentialEstimating />}
          />
          <Route path="/sitework-estimating-services/" element={<SiteWork />} />
          <Route path="/our-trades/" element={<Trade />} />
          <Route
            path="/mechanical-estimating-services/"
            element={<MechanicalEstimating />}
          />
          <Route path="/hvac-estimating-services/" element={<HVAC />} />
          <Route path="/plumbing-estimating-services/" element={<Plumbing />} />
          <Route
            path="/electrical-estimating-services/"
            element={<ElectricalEstimation />}
          />
          <Route
            path="/construction-estimating-services-nyc/"
            element={<NYCServices />}
          />
          <Route
            path="/conveying-system-estimating-services/"
            element={<ConveyingSystem />}
          />
          <Route
            path="/special-construction-estimating-services/"
            element={<SpecialConstruction />}
          />
          <Route
            path="/equipment-estimating-services/"
            element={<Equipment />}
          />
          <Route
            path="/interior-exterior-finishes/"
            element={<InterionExterior />}
          />
          <Route
            path="/landscaping-estimating-services/"
            element={<LandScaping />}
          />
          <Route
            path="/rebar-estimating-services/"
            element={<RebarEstimating />}
          />
          <Route
            path="/insulation-estimating-services/"
            element={<Insulating />}
          />
          <Route path="/roofing-estimating-services/" element={<Roofing />} />
          <Route
            path="/wood-plastic-estimating-services/"
            element={<WoodandPlastic />}
          />
          <Route path="/flooring-estimating-services/" element={<Flooring />} />
          <Route path="/drywall-estimating-services/" element={<DryWall />} />
          <Route path="/gutter-estimating-services/" element={<Gutter />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default App;
