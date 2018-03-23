import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
    
  }));

  it('get value', inject([MessageService], (service: MessageService) => {
    
    expect(service.get()).toBe("result");
  }));

   it('spy on get()', inject([MessageService], (service: MessageService) => {
    spyOn(service,"get");
    service.get();
    expect(service.get).toHaveBeenCalledTimes(1);
  }));



});
