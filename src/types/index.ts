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
