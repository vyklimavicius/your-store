class UserSerializer < ActiveModel::Serializer

  # to pass all the attributes
  def attributes(*args)
    object.attributes.symbolize_keys
  end
  # attributes :id, :name
  has_many :carts
  has_many :items, through: :carts
end
