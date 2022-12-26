import {Injectable} from '@angular/core';
import {Toast} from "../models/toast";
import {Observable, Subject} from "rxjs";
import {ToastsEnum} from "../models/enums/toasts.enum";

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    private toastsSubject = new Subject<Toast[]>();
    private toasts: Toast[] = [];
    constructor() {
    }

    showSuccessToast(message: string) {
        let toast = new Toast()
        toast.type = ToastsEnum.SUCCESS
        toast.message = message
        this.toasts.push(toast);
        this.toastsSubject.next(this.toasts);
        setTimeout(() => this.clearToast(toast), 6000);
    }

    showNewToast(toast: Toast) {
        this.toasts.push(toast);
        this.toastsSubject.next(this.toasts);
        setTimeout(() => this.clearToast(toast), 6000);
    }

    private clearToast(toast: Toast) {
        this.toasts = this.toasts.filter(x => x !== toast);
        this.toastsSubject.next(this.toasts);
    }

    getToasts(): Observable<Toast[]> {
        return this.toastsSubject.asObservable();
    }

}
