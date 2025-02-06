import React, { useState, useEffect } from "react";
import "./DSSelf.css";
import FileUpload from "../../../../Components/FileUpload/FileUpload";
import FeatureSelection from "../FeatureSelection";
import DSGraphs from "../DSGraphs/DSGraphs";

const DSSelf = () => {
  const [csvPath, setCsvPath] = useState("");
  const [features, setFeatures] = useState([]);
  const [feature1, setFeature1] = useState("");
  const [feature2, setFeature2] = useState("");
  const [loading, setLoading] = useState(false);
  const [scatterData, setScatterData] = useState(null);
  const [histogramData, setHistogramData] = useState(null);
  const [linePlotData, setLinePlotData] = useState(null);
  const [correlationMatrixData, setCorrelationMatrixData] = useState(null);
  const [boxPlotData, setBoxPlotData] = useState(null);

  // Automatically set feature1 and feature2 when features are populated
  useEffect(() => {
    if (features.length >= 2) {
      setFeature1(features[0]);
      setFeature2(features[1]);
    }
  }, [features]); // This will run whenever features is updated
  return (
    <div className="section-dsself">
      <h1 className="dsself-heading">
        Upload your own data set<span className="bounce">!</span>
      </h1>

      <p className="dsself-desc">and it is as easy as it can get</p>
      <FileUpload
        setCsvPath={setCsvPath}
        setFeatures={setFeatures}
        setFeature1={setFeature1}
        setFeature2={setFeature2}
        setLoading={setLoading}
      />

      {csvPath && (
        <FeatureSelection
          features={features}
          feature1={feature1}
          setFeature1={setFeature1}
          feature2={feature2}
          setFeature2={setFeature2}
          setScatterData={setScatterData}
          setHistogramData={setHistogramData}
          setLinePlotData={setLinePlotData}
          setCorrelationMatrixData={setCorrelationMatrixData}
          setBoxPlotData={setBoxPlotData}
          csvPath={csvPath}
          setLoading={setLoading}
        />
      )}

      {loading && <p>Loading...</p>}
      <DSGraphs
        scatterData={scatterData}
        histogramData={histogramData}
        linePlotData={linePlotData}
        correlationMatrixData={correlationMatrixData}
        boxPlotData={boxPlotData}
        features={features}
        feature1={feature1}
        feature2={feature2}
      />
    </div>
  );
};

export default DSSelf;
