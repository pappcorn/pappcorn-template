import { AfterViewInit, Component, ElementRef, HostBinding, Input, Optional, Self, ViewChild } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { IonDatetime } from '@ionic/angular';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';

@Component({
  selector: 'papp-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
  providers: [
    [{ provide: MatFormFieldControl, useExisting: DateTimeComponent }],
  ],
})
export class DateTimeComponent
  implements AfterViewInit, MatFormFieldControl<Date>, ControlValueAccessor
{
  static nextId = 0;

  @ViewChild(IonDatetime) private ionDateTime!: IonDatetime;

  onChange!: (date: Date) => void;
  onTouched!: () => void;
  stateChanges = new Subject<void>();
  focused = false;
  touched = false;
  controlType = 'example-tel-input';

  @HostBinding() id = `${this.controlType}-${DateTimeComponent.nextId++}`;

  @Input() 'aria-describedby'!: string;
  @Input() pappDatepicker!: DateTimeComponent;
  @Input() displayFormat!: string;
  @Input()
  get value(): Date | null {
    return this._value;
  }
  set value(date) {
    this._value = date;
    this.stateChanges.next();
  }
  private _value!: Date | null;
  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  private _placeholder!: string;
  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  private _required = false;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _disabled = false;

  get empty(): boolean {
    return !this.value;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  get errorState(): boolean {
    return !this.value && this.touched;
  }

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private _elementRef: ElementRef
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterViewInit(): void {
    this.ionDateTime.ionChange.subscribe((data) => {
      this.value = new Date(data.detail.value);
      this.onChange?.(this.value);
    });
  }

  onContainerClick(event: MouseEvent): void {
    if (!this._elementRef.nativeElement.contains(event.target)) {
      this.ionDateTime.open();
    }
  }

  setDescribedByIds(): void {
    return;
  }

  registerOnChange(fn: (date: Date) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: Date | string): void {
    if (typeof obj === 'string') {
      const date = new Date(obj);
      this.value =
        date instanceof Date && !isNaN(date as any) ? date : this.value;
    } else {
      this.value = obj;
    }
  }

  onFocusIn() {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }

  onFocusOut(event: FocusEvent) {
    if (
      !this._elementRef.nativeElement.contains(event.relatedTarget as Element)
    ) {
      this.focused = false;
      this.touched = true;
      this.stateChanges.next();
      this.onTouched?.();
    }
  }
}
