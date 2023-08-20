import { InputJsonValue } from "../../types";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  description: string;
  listingCreatedBy?: string | null;
  locationData?: InputJsonValue;
  locationType: string;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType: string;
  price: number;
  title: string;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};
