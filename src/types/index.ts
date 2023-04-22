export interface Area {
  map(arg0: (content: any) => void): unknown;
  width: number;
  height: number;
}

export interface AmountInk {
  literPaintPerMeter: number;
  totalAreaDoor: number;
  TotalAreaWindow: number;
  totalAreaWall: number;
}

export interface ContentCalculateType {
  wall: {
    measure: Area[];
  };
  door: {
    measure: Area[];
  };
  window: {
    measure: Area[];
  };
}

export interface CansNeeded {
  dezoito: number;
  tresVirgulaSeis: number;
  doisVirgulaCinco: number;
  zeroVirgulaCinco: number;
  AreaTotal: number;
  totalInk: number;
}

export interface CansInk {
  size: number;
  complete: number;
  missing: number;
}
