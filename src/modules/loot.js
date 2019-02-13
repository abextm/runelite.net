import { uniq, concat } from 'ramda'
import { createActions, handleActions } from 'redux-actions'
import api from '../api'
import { getLatestRelease } from './git'

const runeliteApi = api('https://api.runelite.net/')
const runeliteStaticApi = api('https://static.runelite.net/')

// Actions
export const { fetchLoot, setLoot, setLootRange } = createActions(
  {
    FETCH_LOOT: () => async (dispatch, getState) => {
      const version = getLatestRelease(getState()).name
      const uuid = getState().account.uuid

      const names = await runeliteStaticApi('cache/item/names.json', {
        method: 'GET'
      })

      const chunkSize = 500
      let offset = 0

      while (true) {
        const newLoot = await runeliteApi(
          `runelite-${version}/loottracker?count=${chunkSize}&start=${offset}`,
          {
            method: 'GET',
            headers: {
              'RUNELITE-AUTH': uuid
            }
          }
        )

        const result = newLoot.map(entry => {
          entry.drops = entry.drops.map(drop => {
            drop.name = names[drop.id]
            return drop
          })

          return entry
        })

        let length = 0

        for (let entry of result) {
          length += entry.drops.length
        }

        offset += length
        dispatch(setLootRange(result))

        if (length !== chunkSize) {
          break
        }
      }

      return offset
    }
  },
  'SET_LOOT',
  'SET_LOOT_RANGE'
)

// Reducer
export default handleActions(
  {
    [setLoot]: (state, { payload }) => uniq(concat(state, payload)),
    [setLootRange]: (state, { payload }) => payload
  },
  []
)
