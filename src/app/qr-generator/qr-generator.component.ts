import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';


@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.scss']
})
export class QrGeneratorComponent implements OnInit {

  textToConvert: string = '';
  qrCodeImage: string = '';

  async generateQRCode() {
    if (this.textToConvert) {
      this.qrCodeImage = await QRCode.toDataURL(this.textToConvert);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
