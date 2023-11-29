import { Component} from "@angular/core";

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.copmponent.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {
  whenInput (e:any): void {
    const value = e.target.value.replace(/\s/g, '');
    if(!Number(value) && Number(value) !== 0 || value === "") {
      e.target.value = ''

    }
  }

  move(e: any, p: any, c: any, n: any ): void {
    const value = e.target.value.replace(/\s/g, '');
    let length = c.value.length;
    let maxLength = c.getAttribute('maxlength');

    if(( Number(value) && Number(value) !== 0) && (length == maxLength)) {
      if(n !== '') {
        n.focus();
      }
    }
    if(e.key === 'Backspace') {
      c.value = ''
      if(p !== '') {
        p.focus()

      }
    }
  }
  pastCode(e:ClipboardEvent, ...elems:any[]): void {
    let clipboardData = e.clipboardData ;
    let pastedText = clipboardData!.getData('text').replace(/\s/g, '') ;
    elems.forEach((elem, index) => {
      elem.value = pastedText[index]?.trim() ? Number(pastedText[index]) : '';
    })
  }
}
