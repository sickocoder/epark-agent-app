export interface RecieptDetails {
  id: string;
  park: string;
  mobile: {
    licensePlate: string;
    enterDate: string;
    outDate: string;
  };
  bill: string;
}

export const makeRecietTemplate = (recieptDetails: RecieptDetails) => `
<html>
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
    />
  </head>
  <body style="text-align: center;">
    <div style="font-family: Helvetica Neue;">
      <div
        style="
          text-align: center;
          border-bottom: 1px dashed #000;
          padding: 8px;
        "
      >
        <h3 style="font-weight: bold;">
          ** Ticket De Entrada **
        </h3>
        <h4>${recieptDetails.id}</h4>
      </div>
      <div style="padding: 16px 8px 16px 8px; border-bottom: 1px dashed #000;">
        <div><strong>Parque:</strong> ${recieptDetails.park}</div>
        <div><strong>Matricula:</strong> ${recieptDetails.mobile.licensePlate}</div>
        <div><strong>Entrada:</strong> ${recieptDetails.mobile.enterDate}</div>
      </div>
      <div>
        <h3
          style="
            font-weight: bold;
            text-align: center;
            padding-top: 8px;
            padding-bottom: 16px;
            border-bottom: 1px solid #000;
          "
        >
          ** OBRIGADO **
        </h3>
      </div>

      <div
        style="
          text-align: center;
          border-bottom: 1px dashed #000;
          padding: 8px;
          padding-top: 16px;
        "
      >
        <h3 style="font-weight: bold;">
          ** Ticket De Saída **
        </h3>
        <h4>A32343</h4>
      </div>
      <div style="padding: 16px 8px 16px 8px; border-bottom: 1px dashed #000;">
        <div><strong>Parque:</strong> ${recieptDetails.park}</div>
        <div><strong>Matricula:</strong> ${recieptDetails.mobile.licensePlate}</div>
        <div><strong>Entrada:</strong> ${recieptDetails.mobile.enterDate}</div>
        <div><strong>Saída:</strong> ${recieptDetails.mobile.outDate}</div>
        <div><strong>Preço Total:</strong>  ${recieptDetails.bill} KZ</div>
      </div>
      <div>
        <h3
          style="
            font-weight: bold;
            text-align: center;
            padding-top: 8px;
            padding-bottom: 8px;
          "
        >
          ** OBRIGADO **
        </h3>
      </div>
    </div>
  </body>
</html>
`;
