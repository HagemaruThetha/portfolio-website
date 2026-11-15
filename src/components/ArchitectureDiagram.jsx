// The WordPress-on-AWS project from the CV, drawn as a VPC diagram.
// Only services named in the CV appear here.

function Node({ name, detail, kind }) {
  return (
    <div className={`node${kind ? ` node--${kind}` : ''}`}>
      <span className="node__name">{name}</span>
      {detail && <span className="node__detail">{detail}</span>}
    </div>
  )
}

function Link() {
  return <span className="arch__link" aria-hidden="true" />
}

export default function ArchitectureDiagram() {
  return (
    <figure className="arch" aria-labelledby="arch-caption">
      <div className="arch__bar">
        <span className="arch__title">wordpress-on-aws</span>
        <span className="arch__meta">Project diagram</span>
      </div>

      <div className="arch__body">
        <div className="arch__edge">
          <Node name="Route 53" detail="DNS" kind="edge" />
        </div>
        <Link />

        <div className="vpc">
          <span className="vpc__label">VPC</span>

          <div className="tier tier--public">
            <span className="tier__label">Public subnets</span>
            <div className="tier__row">
              <Node name="Application Load Balancer" detail="Across both AZs" />
              <Node name="NAT Gateway" detail="Outbound only" />
            </div>
          </div>

          <Link />

          <div className="tier-pair">
            <div className="tier tier--private">
              <span className="tier__label">Private · AZ a</span>
              <Node name="EC2" detail="WordPress container" />
            </div>
            <div className="tier tier--private">
              <span className="tier__label">Private · AZ b</span>
              <Node name="EC2" detail="WordPress container" />
            </div>
          </div>

          <Link />

          <div className="tier tier--data">
            <span className="tier__label">Database subnet</span>
            <Node name="Amazon RDS" detail="WordPress database" />
          </div>
        </div>

        <div className="arch__services">
          <Node name="S3" detail="Media storage" kind="edge" />
          <Node name="CloudWatch" detail="Monitoring" kind="edge" />
          <Node name="IAM" detail="Access" kind="edge" />
        </div>
      </div>

      <figcaption id="arch-caption" className="arch__legend">
        <span><i className="swatch swatch--public" />Public</span>
        <span><i className="swatch swatch--private" />Private app</span>
        <span><i className="swatch swatch--data" />Data</span>
        <span className="arch__note">Security groups on every tier</span>
      </figcaption>
    </figure>
  )
}
