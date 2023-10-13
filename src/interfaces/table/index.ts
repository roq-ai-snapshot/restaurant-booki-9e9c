import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  restaurant_id: string;
  table_number: number;
  capacity: number;
  availability: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  restaurant_id?: string;
  availability?: string;
}
