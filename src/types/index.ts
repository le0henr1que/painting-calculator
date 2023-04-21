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
    measure: [Area];
  };
  door: {
    measure: [Area];
  };
  window: {
    measure: [Area];
  };
}

export interface CansNeeded {
  '18': number;
  '3.6': number;
  '2.5': number;
  '0.5': number;
  AreaTotal: number;
}

export interface CansInk {
  size: number;
  complete: number;
  missing: number;
}
