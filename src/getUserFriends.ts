import axios from 'axios'
import { Friend } from './types'

export default async function getUserFriends(user: string, key: string): Promise<Friend[]>{
  const { data } = await axios.get(`http://api.steampowered.com/ISteamUser/GetFriendList/v0001?key=${key}&steamid=${user}&relationship=friend`);
  const friendsIds: string[] = data.friendslist.friends.map((friend: any) => friend.steamid)
  friendsIds.push(user)
  let friends = []
  friendsIds.map(id => friends.push({id: id}))
  return friends 
}