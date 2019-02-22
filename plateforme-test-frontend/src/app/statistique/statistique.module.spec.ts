import { StatistiqueModule } from './statistique.module';

describe('StatistiqueModule', () => {
  let statistiqueModule: StatistiqueModule;

  beforeEach(() => {
    statistiqueModule = new StatistiqueModule();
  });

  it('should create an instance', () => {
    expect(statistiqueModule).toBeTruthy();
  });
});
