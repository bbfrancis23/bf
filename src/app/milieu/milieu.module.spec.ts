import { MilieuModule } from './milieu.module';

describe('MilieuModule', () => {
  let milieuModule: MilieuModule;

  beforeEach(() => {
    milieuModule = new MilieuModule();
  });

  it('should create an instance', () => {
    expect(milieuModule).toBeTruthy();
  });
});
