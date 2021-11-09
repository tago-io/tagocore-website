export interface IPluginDeveloper {
  name: string;
  verified: boolean;
  domain?: string;
}

export interface IPlugin {
  name: string;
  id: string;
  developer: IPluginDeveloper;
  rating: number;
  downloads: number;
}
