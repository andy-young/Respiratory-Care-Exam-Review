const eq = {
    eTankTime(flowRate, tankPSI, stopPSI=0) {
        const time = (tankPSI - stopPSI) * 0.3 / flowRate / 60;
        return `E cylinder duration: ${time} hours.`;
    },
    
    hTankTime(flowRate, tankPSI, stoPSI=0) {
        const time = (tankPSI - stopPSI) * 3 / flowRate / 60;
        return `H cylinder duration: ${time} hours.`;
    },
    
    liquidSysTime(flowRate, lbs) {
        const time = lbs * 344 / flowRate / 60;
        return `Liquid O2 duration: ${time} hours.`;
    },
    
    AV_diff(Hb, SaO2, SVO2) {
        const CaO2 = 1.34 * Hb * SaO2;
        const CVO2 = 1.34 * Hb * SVO2;
        const AV_diff = CaO2 - CVO2;
        return `The total arterial and venous O2 content is ${AV_diff}.`
    },
    
    totalFlow(FiO2, flowRate) {
        const RA = FiO2 - 20;
        const O2 = 100 - FiO2;
        const q = O2/RA;
        const totalParts = q + 1;
        return `Total flow delivered: ${totalParts * flowRate} L/min.`
    },
    
    HeO2Flow() {},
    
    RH() {},
    
    BH() {},
    
    HD() {},
    
    PAO2() {},
    
    AaGradient() {},
    
    QSQT() {},
    
    SVR() {},
    
    PVR() {},
    
    QT() {},
    
    IBW() {},
    
    TubingCompliance() {},
    
    VTdelivered() {},
    
    DynamicCompliance() {},
    
    StaticCompliance() {},
    
    InspFlowRate() {},
    
    IEratio() {},
    
    ITime() {},
    
    VDVTratio() {},
    
    desiredFiO2() {},
    
    desiredVentRate() {},
    
    desiredVE() {},
    
    desiredVT() {}
};