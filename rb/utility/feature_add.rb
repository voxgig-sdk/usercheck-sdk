# Usercheck SDK utility: feature_add
module UsercheckUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
