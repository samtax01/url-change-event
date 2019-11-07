import { cacheIndex, cachePath, updateCacheState } from '../src/stateCache'

describe('state cache test', function() {
  it('index & path', function() {
    updateCacheState()
    expect(cacheIndex).to.equal(window.history.state._index)
    expect(cachePath).to.equal(window.location.pathname)
  })
})
