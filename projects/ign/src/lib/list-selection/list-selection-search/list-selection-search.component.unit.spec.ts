import { ListSelectionSearchComponent } from './index';

describe('List Selection Search', () => {
  let component: ListSelectionSearchComponent;
  let spy;

  beforeEach(() => {
    component = new ListSelectionSearchComponent();
    spy = jasmine.createSpy('foo', () => {});

    component.filterInput$.subscribe(spy);
  });

  it('should emit to filterInput$ when value set in FormControl', () => {
    component.searchCtrl.setValue('text');

    expect(spy).toHaveBeenCalledWith('text');
  });

  it('should emit to filterInput$ once when same value set twice in FormControl', () => {
    component.searchCtrl.setValue('text');
    component.searchCtrl.setValue('text');

    expect(spy).toHaveBeenCalledTimes(1);
    // expect(spy).toHaveBeenLastCalledWith('text');
    expect(spy).toHaveBeenCalledWith('text');
  });

  it('should emit to filterInput$ once when same value with spaces set twice in FormControl', () => {
    component.searchCtrl.setValue('text');
    component.searchCtrl.setValue('  text  ');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('text');
  });

  it('should emit to filterInput$ twice when two different values set in FormControl', () => {
    component.searchCtrl.setValue('text');
    component.searchCtrl.setValue('value');

    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should not emit to filterInput$ if empty value emitted by FormControl', () => {
    component.searchCtrl.setValue('');

    expect(spy).toHaveBeenCalledTimes(0);
  });
});
