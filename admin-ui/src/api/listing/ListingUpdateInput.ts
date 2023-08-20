import { InputJsonValue } from "../../types";
import { WishlistUpdateManyWithoutListingsInput } from "./WishlistUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  description?: string;
  listingCreatedBy?: string | null;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
  price?: number;
  title?: string;
  wishlists?: WishlistUpdateManyWithoutListingsInput;
};
