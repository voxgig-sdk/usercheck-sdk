# frozen_string_literal: true

# Typed models for the Usercheck SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Domain entity data model.
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] valid
#   @return [Boolean, nil]
Domain = Struct.new(
  :domain,
  :message,
  :valid,
  keyword_init: true
)

# Request payload for Domain#load.
#
# @!attribute [rw] id
#   @return [String]
DomainLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

