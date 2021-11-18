export interface IPluginDeveloper {
  name: string;
  verified: boolean;
  domain?: string;
}

export interface IPlugin {
  categories: string[];
  description: string;
  developer: IPluginDeveloper;
  downloads: number;
  id: string;
  logo_url: string;
  name: string;
  platforms: string[];
  rating: number;
}

export type TPluginPlatformType = "cross-platform" | "platform-specific";

export interface IPluginPublishFiles {
  "linux-x64"?: File;
  "linux-arm64"?: File;
  "linux-arm7"?: File;
  "alpine-x64"?: File;
  "alpine-arm64"?: File;
  "windows-x64"?: File;
  "windows-arm64"?: File;
  "macos-x64"?: File;
  "macos-arm64"?: File;
  any?: File;
}
