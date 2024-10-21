Outline objects, attributes and methods for a rent share business.

#### object:
users

#### attributes:
- id (number)
- name (string)
- is_seeking (bool)
- is_offering (bool)
- is_verified (bool)
- listings ([array of property ids])
- favourites ([array of property ids])
- contact_info ({email: string, phone: number})
- payment_info ({sort code: number, account: number, csc: number})

#### methods: 
set_seeking, set_offering, set_verified, add_listing, add_favourite, purchase_service, view_info, edit_info, pay_bill, boost_profile

#### object:
property

#### attributes:
- id (number)
- type (string) house, apartment, office
- rent amount (number)
- location ({lat: number, long: number})
- move_in_date (date)
- amount_of_rooms (number)
- shared_amenities ([array list of strings])
- current_occupants ([array referencing users])
- is_boosted (bool)

#### methods:
create_listing, edit_listing, add_amenities, link_user, boost_listing