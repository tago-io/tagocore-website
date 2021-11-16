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

export type TPluginPlatformType = "cross-platform" | "platform-specific";

export interface IPluginPublishFiles {
  ANY?: File;
  LINUX_X64?: File;
  LINUX_ARM64?: File;
  LINUX_ARM7?: File;
  ALPINE_X64?: File;
  ALPINE_ARM64?: File;
  WINDOWS_X64?: File;
  WINDOWS_ARM64?: File;
  MACOS_X64?: File;
  MACOS_ARM64?: File;
}
