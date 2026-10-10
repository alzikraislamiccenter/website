import Container from "@/components/common/Container";

export default function CareerOpenings() {
  return <section className="career-openings" aria-labelledby="career-openings-title"><Container>
    <div className="career-heading"><span>CAREERS AT AL ZIKRA</span><h2 id="career-openings-title">Career opportunities</h2><p>Thank you for your interest in joining Al Zikra Islamic Center.</p></div>
    <div className="career-jobs"><article className="career-job">
      <div><h3>No positions open right now</h3><p>There are currently no roles accepting applications. Please check this page again for future opportunities.</p></div>
      <button type="button" className="career-apply" disabled aria-disabled="true">Applications closed</button>
    </article></div>
  </Container></section>;
}
