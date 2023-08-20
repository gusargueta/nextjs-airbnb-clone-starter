import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ListingWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingCreatedBy?: StringNullableFilter;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringFilter;
  price?: IntFilter;
  title?: StringFilter;
  wishlists?: WishlistListRelationFilter;
};
