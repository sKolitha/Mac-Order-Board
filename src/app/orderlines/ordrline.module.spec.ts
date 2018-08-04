import { OrdrlineModule } from './ordrline.module';

describe('OrdrlineModule', () => {
  let ordrlineModule: OrdrlineModule;

  beforeEach(() => {
    ordrlineModule = new OrdrlineModule();
  });

  it('should create an instance', () => {
    expect(ordrlineModule).toBeTruthy();
  });
});
