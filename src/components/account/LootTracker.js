import { Component, h } from 'preact'
import '../tooltip.css'
import './loot-tracker.css'

const getRlIcon = id => `https://static.runelite.net/cache/item/icon/${id}.png`

const glyphMap = {
  '1': { x: 0, y: 0, w: 5 },
  '2': { x: 5, y: 0, w: 7 },
  '3': { x: 12, y: 0, w: 6 },
  '4': { x: 18, y: 0, w: 6 },
  '5': { x: 24, y: 0, w: 6 },
  '6': { x: 30, y: 0, w: 7 },
  '7': { x: 37, y: 0, w: 6 },
  '8': { x: 43, y: 0, w: 7 },
  '9': { x: 50, y: 0, w: 7 },
  '0': { x: 57, y: 0, w: 7 },
  M: { x: 0, y: 10, w: 8 },
  K: { x: 8, y: 10, w: 7 },
  '%': { x: 15, y: 10, w: 7 },
  '-': { x: 22, y: 10, w: 5 },
  '+': { x: 27, y: 10, w: 7 },
  '/': { x: 37, y: 10, w: 5 },
  '*': { x: 39, y: 10, w: 7 },
  '=': { x: 46, y: 0, w: 6 },
  '^': { x: 52, y: 10, w: 5 },
  '(': { x: 57, y: 10, w: 4 },
  ')': { x: 60, y: 10, w: 4 }
}

const buildQuantity = num => {
  let l = 0
  while (num > 9999) {
    num /= 1000
    l++
  }
  let si = ['', 'K', 'M'][l]
  let str = ~~num + si
  return (
    <span class={`rs-item-quantity rs-item-quantity-${si || 'none'}`}>
      {[...str]
        .map(g => glyphMap[g])
        .filter(g => g)
        .map(g => (
          <div
            class="rs-item-quantity-number"
            style={{
              width: g.w,
              backgroundPositionX: -g.x,
              backgroundPositionY: -g.y
            }}
          />
        ))}
    </span>
  )
}

const buildDrop = drop => (
  <div class="drop-wrapper">
    {buildQuantity(drop.qty)}
    <div class="tooltip-tag">
      <a href={`https://oldschool.runescape.wiki/w/${drop.name}`}>
        <img
          class="card-img-top rs-icon"
          alt={drop.id}
          src={getRlIcon(drop.id)}
        />
      </a>
      <div class="tooltip-tag-text">
        <b>{drop.name || 'Loading...'}</b>
      </div>
    </div>
  </div>
)

const buildLootRecord = record => (
  <div class="card">
    <div class="card-header">
      {record.name}
      <span class="small float-right">x{record.count}</span>
    </div>
    <div class="card-body pt-0 pb-0 record-body">
      <div class="row drop-row">{record.drops.map(buildDrop)}</div>
    </div>
  </div>
)

class LootTracker extends Component {
  componentDidMount() {
    this.props.fetchReleases().then(() => this.props.fetchLoot())
  }

  render({ loot }) {
    return <div class="card-columns">{loot.map(buildLootRecord)}</div>
  }
}

export default LootTracker
