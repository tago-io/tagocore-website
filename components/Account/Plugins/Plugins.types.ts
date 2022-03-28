export type TOtpType = "email" | "sms" | "authenticator";

export interface IPluginListItemPluginVersion {
  active: boolean;
  created_at: string;
  error_code: number;
  name: string;
  short_description: string;
  version: string;
  resource_id: string;
}

export interface IPluginListItemPlugin {
  id: string;
  logo_url: string;
  name: string;
  slug: string;
  versions: IPluginListItemPluginVersion[];
}

export interface IPluginListItemPublisher {
  name: string;
  id: string;
}

export interface IPluginListItem {
  publisher: IPluginListItemPublisher;
  plugins: IPluginListItemPlugin[];
}
