import CaseStudyLayout from "../../components/CaseStudyLayout";
import caseStudies from "../../data/caseStudies";

function MediCare() {
  return <CaseStudyLayout project={caseStudies.medicare} />;
}

export default MediCare;