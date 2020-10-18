export interface Game {
  appid: number
  name: string
  playtime_forever: number,
  img_icon_url?: string,
  img_logo_url?: string,
  has_community_visible_stats?: boolean,
  playtime_windows_forever?: number,
  playtime_mac_forever?: number,
  playtime_linux_forever?: number
} 

export interface OwnedGames {
  total_count: number,
  games: Game[]
}

export interface Friend {
  id: string,
  games: OwnedGames
}