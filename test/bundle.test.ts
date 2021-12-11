import { useCache } from '../src/cache/create';
import { BrowserAxiosStorage } from '../src/storage/browser';
import { MemoryAxiosStorage } from '../src/storage/memory';
import { AxiosStorage } from '../src/storage/storage';

describe('test bundle imports', () => {
  it('should have basic storages', async () => {
    const bundle = await import('../src/index.bundle');

    expect(bundle.useCache).toBe(useCache);
    expect(bundle.AxiosStorage).toBe(AxiosStorage);
    expect(bundle.BrowserAxiosStorage).toBe(BrowserAxiosStorage);
    expect(bundle.MemoryAxiosStorage).toBe(MemoryAxiosStorage);
  });
});