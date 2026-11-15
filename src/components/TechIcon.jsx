import {
  Activity,
  Axis3d,
  Bug,
  Cable,
  ChartScatter,
  Container,
  Network,
  RadioTower,
  Server,
  ShieldCheck,
  Terminal,
  Wifi,
} from 'lucide-react'
import { logos } from '../data/logos.js'

// Skills without a brand get a line symbol instead
const symbols = {
  Containers: Container,
  ECR: Container,
  'BNM RMiT': ShieldCheck,
  'Server racks': Server,
  'Structured cabling': Cable,
  Monitoring: Activity,
  VLANs: Network,
  'Access points': Wifi,
  Fiber: Cable,
  'Point-to-point wireless': RadioTower,
  'K-Means': ChartScatter,
  PCA: Axis3d,
  Cowrie: Bug,
}

export function TechIcon({ name, size = 'sm' }) {
  const logo = logos[name]
  if (logo) {
    return (
      <span className={`tech-icon tech-icon--${size} tech-icon--logo`} aria-hidden="true">
        <svg viewBox={logo.viewBox} dangerouslySetInnerHTML={{ __html: logo.body }} />
      </span>
    )
  }
  const Symbol = symbols[name] || Terminal
  return (
    <span className={`tech-icon tech-icon--${size} tech-icon--symbol`} aria-hidden="true">
      <Symbol strokeWidth={1.5} />
    </span>
  )
}

export function TechTile({ name }) {
  return (
    <li className="tech-tile">
      <TechIcon name={name} size="lg" />
      <span>{name}</span>
    </li>
  )
}
