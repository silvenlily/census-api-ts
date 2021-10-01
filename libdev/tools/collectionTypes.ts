interface RootObject {
  character: Character;
}
interface Character {
  character_id: string;
  name: Name;
  faction_id: string;
  head_id: string;
  title_id: string;
  times: Times;
  certs: Certs;
  battle_rank: Battlerank;
  profile_id: string;
  daily_ribbon: Dailyribbon;
  prestige_level: string;
  items: Item[];
  stats: Stats;
  online_status: string;
  profile: Profile;
  name_merged: string;
  friend_list: Friendlist[];
  world_id: string;
  faction: Faction;
  currency: Currency;
}
interface Currency {
  currency_id: string;
  currency_name: string;
  quantity: string;
  prestige_currency: string;
}
interface Faction {
  name: Name3;
  image_set_id: string;
  image_id: string;
  image_path: string;
  code_tag: string;
  user_selectable: string;
}
interface Friendlist {
  character_id: string;
  last_login_time: string;
  online: string;
}
interface Profile {
  profile_type_id: string;
  profile_type_description: string;
  faction_id: string;
  name: Name3;
  description: Name3;
  image_set_id: string;
  image_id: string;
  image_path: string;
  movement_speed: string;
  backpedal_speed_modifier: string;
  sprint_speed_modifier: string;
  strafe_speed_modifier: string;
}
interface Name3 {
  de: string;
  en: string;
  es: string;
  fr: string;
  it: string;
  tr: string;
}
interface Stats {
  stat: Stat[];
  weapon_stat: Weaponstat[];
  stat_history: Stathistory[];
  stat_by_faction: Statbyfaction[];
  weapon_stat_by_faction: Weaponstatbyfaction[];
}
interface Weaponstatbyfaction {
  stat_name: string;
  item_id: string;
  vehicle_id: string;
  value_vs: string;
  value_nc: string;
  value_tr: string;
  last_save: string;
  last_save_date: string;
}
interface Statbyfaction {
  stat_name: string;
  profile_id: string;
  value_forever_vs: string;
  value_forever_nc: string;
  value_forever_tr: string;
  value_monthly_vs: string;
  value_monthly_nc: string;
  value_monthly_tr: string;
  value_weekly_vs: string;
  value_weekly_nc: string;
  value_weekly_tr: string;
  value_daily_vs: string;
  value_daily_nc: string;
  value_daily_tr: string;
  value_one_life_max_vs: string;
  value_one_life_max_nc: string;
  value_one_life_max_tr: string;
  last_save: string;
  last_save_date: string;
}
interface Stathistory {
  stat_name: string;
  all_time: string;
  one_life_max: string;
  day: Day;
  month: Month;
  week: Week;
  last_save: string;
  last_save_date: string;
}
interface Week {
  w01: string;
  w02: string;
  w03: string;
  w04: string;
  w05: string;
  w06: string;
  w07: string;
  w08: string;
  w09: string;
  w10: string;
  w11: string;
  w12: string;
  w13: string;
}
interface Month {
  m01: string;
  m02: string;
  m03: string;
  m04: string;
  m05: string;
  m06: string;
  m07: string;
  m08: string;
  m09: string;
  m10: string;
  m11: string;
  m12: string;
}
interface Day {
  d01: string;
  d02: string;
  d03: string;
  d04: string;
  d05: string;
  d06: string;
  d07: string;
  d08: string;
  d09: string;
  d10: string;
  d11: string;
  d12: string;
  d13: string;
  d14: string;
  d15: string;
  d16: string;
  d17: string;
  d18: string;
  d19: string;
  d20: string;
  d21: string;
  d22: string;
  d23: string;
  d24: string;
  d25: string;
  d26: string;
  d27: string;
  d28: string;
  d29: string;
  d30: string;
  d31: string;
}
interface Weaponstat {
  stat_name: string;
  item_id: string;
  vehicle_id: string;
  value: string;
  last_save: string;
  last_save_date: string;
}
interface Stat {
  stat_name: string;
  profile_id: string;
  value_forever: string;
  value_monthly: string;
  value_weekly: string;
  value_daily: string;
  value_one_life_max: string;
  last_save: string;
  last_save_date: string;
}
interface Item {
  item_id: string;
  item_type_id: string;
  item_category_id?: string;
  is_vehicle_weapon: string;
  name?: Name2;
  description?: Name2;
  faction_id?: string;
  max_stack_size: string;
  image_set_id?: string;
  image_id?: string;
  image_path?: string;
  is_default_attachment: string;
  item_id_merged: string;
  skill_set_id?: string;
  activatable_ability_id?: string;
  passive_ability_id?: string;
  stack_count?: string;
  stack_count_merged?: string;
}
interface Name2 {
  de: string;
  en: string;
  es: string;
  fr: string;
  it: string;
  tr?: string;
}
interface Dailyribbon {
  count: string;
  time: string;
  date: string;
}
interface Battlerank {
  percent_to_next: string;
  value: string;
}
interface Certs {
  earned_points: string;
  gifted_points: string;
  spent_points: string;
  available_points: string;
  percent_to_next: string;
}
interface Times {
  creation: string;
  creation_date: string;
  last_save: string;
  last_save_date: string;
  last_login: string;
  last_login_date: string;
  login_count: string;
  minutes_played: string;
}
interface Name {
  first: string;
  first_lower: string;
}
